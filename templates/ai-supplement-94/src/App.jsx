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



        // Tab Switching Logic
        function switchTab(tabId) {
            // Hide all pages
            const pages = ['home', 'scan', 'schedule', 'insights', 'vault'];
            
            pages.forEach(id => {
                document.getElementById(`page-${id}`).classList.add('hidden');
                document.getElementById(`btn-${id}`).classList.remove('text-white', 'text-zinc-500'); // Clean slate
                
                // Add inactive class by default
                document.getElementById(`btn-${id}`).classList.add('text-zinc-500');
            });

            // Show selected page
            document.getElementById(`page-${tabId}`).classList.remove('hidden');
            
            // Highlight nav button
            document.getElementById(`btn-${tabId}`).classList.remove('text-zinc-500');
            document.getElementById(`btn-${tabId}`).classList.add('text-white');
        }

        // Scan Simulation
        function simulateScan() {
            const toast = document.getElementById('toast');
            // Show notification
            toast.classList.remove('-translate-y-24');
            toast.classList.add('translate-y-0');
            
            // Hide notification after 3s
            setTimeout(() => {
                toast.classList.remove('translate-y-0');
                toast.classList.add('-translate-y-24');
            }, 3000);
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
      

<div className="w-full max-w-md h-full relative flex flex-col bg-neutral-950 shadow-2xl overflow-hidden">

<header className="absolute top-0 left-0 right-0 z-20 px-6 pt-12 pb-4 flex justify-between items-center bg-gradient-to-b from-neutral-950 to-transparent">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<h1 className="text-lg font-medium text-white tracking-tight">Glowfull</h1>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
<iconify-icon className="text-zinc-400" icon="lucide:user" width="16"></iconify-icon>
</button>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar pb-24 pt-24 px-6 relative" id="app-content">

<section className="fade-in space-y-8" id="page-home">

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
<div className="relative glass-panel rounded-2xl p-6">
<p className="leading-snug text-lg font-normal text-zinc-100 tracking-tight">"Small habits. Strong body."</p>
</div>
</div>

<div className="space-y-4">
<h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Daily Stack</h2>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
<iconify-icon icon="lucide:zap" width="18"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1.5">
<span className="text-zinc-200 text-sm font-medium">Creatine</span>
<span className="text-xs text-zinc-500" style={{}}>1g / 2g</span>
</div>
<div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full bg-white w-3/5 rounded-full"></div>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
<iconify-icon icon="lucide:dumbbell" width="18"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1.5">
<span className="text-zinc-200 text-sm font-medium">Protein</span>
<span className="text-zinc-500 text-xs">20g / 40g</span>
</div>
<div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full bg-zinc-600 w-1/2 rounded-full"></div>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
<iconify-icon icon="lucide:moon" width="18"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1.5">
<span className="text-zinc-200 text-sm font-medium">Magnesium</span>
<span className="text-zinc-500 text-xs">0mg / 400mg</span>
</div>
<div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full bg-zinc-800 w-0 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-1 overflow-hidden mt-8">
<div className="bg-zinc-900/50 p-6 rounded-xl flex flex-col items-center text-center space-y-4">
<div className="w-16 h-16 bg-gradient-to-tr from-orange-400 to-rose-400 rounded-full blur-xl opacity-60 absolute"></div>
<div className="relative z-10">
<iconify-icon className="text-white mb-2" icon="lucide:package" width="40"></iconify-icon>
<h3 className="text-white text-lg font-medium tracking-tight">Glowfull Monthly</h3>
<p className="text-zinc-500 text-sm mt-1 mb-4">Complete supplement stack refill.</p>
<button className="w-full py-2.5 px-4 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
<span>Subscribe $54.99</span>
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="hidden fade-in space-y-8" id="page-vault">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Candy Vault</h2>
<p className="text-zinc-500 text-sm">Collect points to unlock exclusive flavors.</p>
</div>

<div className="glass-panel p-6 rounded-2xl flex items-center justify-between relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full -mr-10 -mt-10"></div>
<div>
<span className="text-xs text-zinc-500 uppercase tracking-widest block mb-1">Available Points</span>
<span className="text-3xl font-semibold text-white tracking-tight">850</span>
</div>
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<iconify-icon icon="lucide:sparkles" width="20"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-2 gap-3">

<div className="glass-panel p-4 rounded-xl flex flex-col items-center text-center gap-2 group cursor-pointer hover:bg-white/5 transition border border-pink-500/20">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white shadow-lg shadow-pink-500/20">
<iconify-icon icon="lucide:candy" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-200">Sour Spark</span>
<span className="text-[10px] text-green-400 flex items-center gap-1">
<iconify-icon icon="lucide:check" width="10"></iconify-icon> Unlocked
                        </span>
</div>

<div className="glass-panel p-4 rounded-xl flex flex-col items-center text-center gap-2 opacity-60">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-600 border border-zinc-700 border-dashed">
<iconify-icon icon="lucide:lock" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400">Night Berry</span>
<span className="text-[10px] text-zinc-600">Scan to unlock</span>
</div>

<div className="glass-panel p-4 rounded-xl flex flex-col items-center text-center gap-2 opacity-60">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-600 border border-zinc-700 border-dashed">
<iconify-icon icon="lucide:lock" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-400">Zen Mint</span>
<span className="text-[10px] text-zinc-600">Scan to unlock</span>
</div>

<div className="glass-panel p-4 rounded-xl flex flex-col items-center text-center gap-2 border-indigo-500/30 bg-indigo-500/5">
<div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:ticket" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-indigo-200">15% Off</span>
<span className="text-[10px] text-indigo-400/70">Redeem: 1000 PTS</span>
</div>
</div>
</section>

<section className="hidden fade-in h-full flex flex-col" id="page-scan">
<div className="flex-1 relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-6 group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&amp;w=1287&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition duration-700"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center p-8">
<div className="w-64 h-64 border border-white/30 rounded-2xl relative">

<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white"></div>

<div className="absolute left-0 right-0 h-0.5 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] scanning-line"></div>
</div>
<p className="mt-8 text-white font-medium bg-black/50 backdrop-blur px-4 py-2 rounded-full text-xs tracking-wide">Align candy within frame</p>
</div>
</div>
<div className="flex items-center justify-between px-4">
<button className="text-zinc-500 hover:text-white transition">
<iconify-icon icon="lucide:image" width="24"></iconify-icon>
</button>
<button className="w-16 h-16 rounded-full border-4 border-white/10 flex items-center justify-center relative group" onclick="simulateScan()">
<div className="w-12 h-12 bg-white rounded-full group-hover:scale-90 transition duration-200"></div>
</button>
<button className="text-zinc-500 hover:text-white transition">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</button>
</div>
</section>

<section className="hidden fade-in space-y-8" id="page-schedule">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Workout Schedule</h2>
<p className="text-zinc-500 text-sm">Automated reminders based on your activity.</p>
</div>

<div className="flex justify-between items-center glass-panel p-4 rounded-xl">
<div className="flex flex-col items-center gap-1 text-zinc-500">
<span className="text-[10px] uppercase">Mon</span>
<span className="text-sm font-medium">12</span>
</div>
<div className="flex flex-col items-center gap-1 text-white bg-zinc-800/80 px-3 py-2 rounded-lg border border-zinc-700">
<span className="text-[10px] uppercase text-indigo-400">Tue</span>
<span className="text-sm font-medium">13</span>
</div>
<div className="flex flex-col items-center gap-1 text-zinc-500">
<span className="text-[10px] uppercase">Wed</span>
<span className="text-sm font-medium">14</span>
</div>
<div className="flex flex-col items-center gap-1 text-zinc-500">
<span className="text-[10px] uppercase">Thu</span>
<span className="text-sm font-medium">15</span>
</div>
<div className="flex flex-col items-center gap-1 text-zinc-500">
<span className="text-[10px] uppercase">Fri</span>
<span className="text-sm font-medium">16</span>
</div>
</div>

<div className="space-y-4">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Next Session</label>
<div className="flex gap-3">
<div className="flex-1 glass-panel rounded-xl px-4 py-3 flex items-center justify-between text-white text-sm">
<span>Lower Body</span>
<iconify-icon className="text-zinc-500" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
<div className="w-1/3 glass-panel rounded-xl px-4 py-3 flex items-center justify-center text-white text-sm">
                            06:00 PM
                        </div>
</div>
</div>

<div className="space-y-4">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Auto-Reminders</label>

<div className="flex items-center justify-between py-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
</div>
<div>
<p className="text-zinc-200 text-sm font-medium">Post-Workout Stack</p>
<p className="text-zinc-600 text-xs">Creatine &amp; Protein</p>
</div>
</div>
<div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-zinc-400 border-4 border-zinc-900 appearance-none cursor-pointer transition-all duration-300" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>
</div>
</section>

<section className="hidden fade-in space-y-8" id="page-insights">

<div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
<h2 className="text-white text-lg font-medium tracking-tight mb-4">Recovery Mode</h2>
<div className="flex items-start gap-4 mb-6">
<div className="mt-1">
<div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="w-0.5 h-12 bg-zinc-800 mx-auto mt-1"></div>
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
</div>
<div>
<p className="text-sm text-zinc-300 mb-1">Magnesium Glycinate Taken</p>
<p className="text-xs text-zinc-500">8:45 PM • Post Workout</p>

<div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg flex gap-3 items-center">
<iconify-icon className="text-blue-400" icon="lucide:activity" width="18"></iconify-icon>
<div>
<p className="text-blue-200 text-xs font-medium">AI Suggestion</p>
<p className="text-blue-300/80 text-[10px]">Since you took Mag Glycinate, try this 5min lumbar stretch to optimize sleep.</p>
</div>
</div>
</div>
</div>
<button className="w-full py-2 bg-zinc-100 text-black text-xs font-medium rounded-lg hover:bg-white transition">Start Stretch Routine</button>
</div>
</section>
</main>

<nav className="absolute bottom-0 w-full bg-black/80 backdrop-blur-xl border-t border-white/5 pb-6 pt-4 px-6 z-30">
<ul className="flex justify-between items-center text-zinc-500">
<li>
<button className="nav-btn flex flex-col items-center gap-1.5 text-white group" id="btn-home" onclick="switchTab('home')">
<iconify-icon className="group-hover:scale-110 transition" icon="lucide:home" width="20"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Home</span>
</button>
</li>
<li className="">
<button className="nav-btn flex flex-col hover:text-white transition group gap-x-1.5 gap-y-1.5 items-center" id="btn-schedule" onclick="switchTab('schedule')">
<svg className="group-hover:scale-110 transition" data-icon-replaced="true" data-icon-set="lucide" data-lucide="calendar-clock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.3V14"></path><circle cx="16" cy="16" r="6"></circle></svg>
<span className="text-[10px] font-medium tracking-wide">Plan</span>
</button>
</li>
<li className="">
<button className="nav-btn flex flex-col items-center gap-1.5 hover:text-white transition group" id="btn-scan" onclick="switchTab('scan')">
<svg className="group-hover:scale-110 transition" data-icon-replaced="true" data-icon-set="lucide" data-lucide="scan-line" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path className="" d="M7 12h10"></path></svg>
<span className="text-[10px] font-medium tracking-wide">Scan</span>
</button>
</li>
<li className="">
<button className="nav-btn flex flex-col items-center gap-1.5 hover:text-white transition group" id="btn-vault" onclick="switchTab('vault')">
<svg className="group-hover:scale-110 transition" data-icon-replaced="true" data-icon-set="lucide" data-lucide="archive" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg>
<span className="text-[10px] font-medium tracking-wide">Vault</span>
</button>
</li>
<li className="">
<button className="nav-btn flex flex-col items-center gap-1.5 hover:text-white transition group" id="btn-insights" onclick="switchTab('insights')">
<svg className="group-hover:scale-110 transition" data-icon-replaced="true" data-icon-set="lucide" data-lucide="sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="text-[10px] font-medium tracking-wide">Glow</span>
</button>
</li>
</ul>
</nav>

</div>


    </>
  );
}
