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
slate: {
850: '#151b28',
900: '#0f172a',
950: '#020617',
},
brand: {
500: '#6366f1', // Indigo
600: '#4f46e5',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'wave': 'wave 1.2s ease-in-out infinite',
},
keyframes: {
wave: {
'0%, 100%': { height: '10%' },
'50%': { height: '60%' },
}
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:soundwave-square-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-lg">VOX/AI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#product">Product</a>
<a className="hover:text-white transition-colors" href="#dashboard">Dashboard</a>
<a className="hover:text-white transition-colors" href="#integrations">Integrations</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="group relative px-4 py-2 rounded-full bg-white text-slate-950 text-sm font-semibold tracking-tight hover:bg-slate-200 transition-all overflow-hidden" href="#">
<span className="relative z-10">Book a Demo</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Now integrating with Salesforce &amp; HubSpot
        </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-6 max-w-4xl mx-auto">
            AI voice agents that answer your calls <span className="text-slate-500">—</span> <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">and show you everything.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We build AI voice agents that handle phone calls like professionals and sync every conversation to a real-time dashboard and your CRM.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-white text-slate-950 font-semibold tracking-tight hover:bg-slate-200 transition-colors w-full sm:w-auto">
                Start Free Trial
            </button>
<button className="h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                See the dashboard
            </button>
</div>

<div className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">

<div className="absolute left-0 top-0 h-full w-1/3 border-r border-white/5 flex flex-col items-center justify-center bg-slate-950/30">
<div className="mb-4 text-xs font-medium text-slate-500 tracking-wider uppercase">Live Call Analysis</div>
<div className="flex items-center gap-1 h-12">
<div className="w-1 bg-indigo-500/80 rounded-full animate-wave delay-75"></div>
<div className="w-1 bg-indigo-500/80 rounded-full animate-wave delay-150"></div>
<div className="w-1 bg-indigo-500/80 rounded-full animate-wave delay-300"></div>
<div className="w-1 bg-indigo-500/80 rounded-full animate-wave delay-75"></div>
<div className="w-1 bg-indigo-500/80 rounded-full animate-wave"></div>
</div>
<div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
<iconify-icon className="text-slate-400" icon="solar:user-linear"></iconify-icon>
<span className="text-xs text-slate-300">Processing Intent...</span>
</div>
</div>

<div className="absolute right-0 top-0 h-full w-2/3 p-8 flex flex-col justify-center">
<div className="grid grid-cols-2 gap-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
<div className="h-2 w-3/4 bg-slate-700 rounded-full mb-4"></div>
<div className="h-2 w-1/2 bg-slate-700 rounded-full mb-4"></div>
<div className="col-span-2 h-24 bg-white/5 rounded-lg border border-white/5 p-4">
<div className="flex gap-2 mb-2">
<div className="h-2 w-12 bg-indigo-500/40 rounded-full"></div>
<div className="h-2 w-8 bg-emerald-500/40 rounded-full"></div>
</div>
<div className="h-2 w-full bg-slate-700 rounded-full mb-2"></div>
<div className="h-2 w-2/3 bg-slate-700 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">1. AI Answers Instantly</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Never miss a call. The AI picks up 24/7, greets callers naturally, and understands context immediately.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">2. Smart Conversation</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        It handles bookings, answers questions, and qualifies leads based on your custom business rules.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3">3. Instant Sync</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Call recordings, transcripts, and extracted data appear in your dashboard and CRM in real-time.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 bg-slate-950 relative overflow-hidden" id="dashboard">
<div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Your calls, finally visible.</h2>
<p className="text-slate-400 text-lg">Every phone call becomes structured data you can search, analyze, and act on instantly.</p>
</div>

<div className="max-w-[1400px] mx-auto h-[800px] bg-[#0B0E14] rounded-2xl border border-white/10 shadow-2xl flex overflow-hidden relative z-10 ring-1 ring-white/5">

<div className="w-64 border-r border-white/5 flex flex-col bg-[#0f1219]">
<div className="p-6 flex items-center gap-3 border-b border-white/5">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">L</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Lawson &amp; Partners</span>
<span className="text-xs text-slate-500">Enterprise Plan</span>
</div>
</div>
<div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">

<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-500/10 text-indigo-400 text-sm font-medium" href="#">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                        Calls
                        <span className="ml-auto flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                        Contacts
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
                        Analytics
                    </a>
<div className="pt-6 pb-2 px-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Configuration</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<iconify-icon icon="solar:robot-2-linear" width="18"></iconify-icon>
                        AI Agents
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<iconify-icon icon="solar:tuning-square-2-linear" width="18"></iconify-icon>
                        Flows &amp; Scripts
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium" href="#">
<iconify-icon icon="solar:link-circle-linear" width="18"></iconify-icon>
                        Integrations
                    </a>
</div>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 px-2 py-2">
<img alt="User" className="w-8 h-8 rounded-full border border-white/10 grayscale opacity-70" src="https://i.pravatar.cc/150?img=11"/>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-300">Jane Operator</span>
<span className="text-[10px] text-slate-500">View Profile</span>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#0B0E14]">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#0B0E14]">
<div className="flex items-center gap-4">
<h2 className="text-white font-medium">Inbox</h2>
<div className="h-4 w-[1px] bg-white/10"></div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-white/5 text-xs text-slate-400 border border-white/5">All Calls</span>
<span className="px-2 py-1 rounded hover:bg-white/5 text-xs text-slate-500 border border-transparent cursor-pointer transition-colors">Missed</span>
<span className="px-2 py-1 rounded hover:bg-white/5 text-xs text-slate-500 border border-transparent cursor-pointer transition-colors">Action Required</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" icon="solar:magnifier-linear" width="16"></iconify-icon>
<input className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 w-64 placeholder:text-slate-600 transition-colors" placeholder="Search transcripts..." type="text"/>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 text-slate-400 transition-colors">
<iconify-icon icon="solar:filter-linear" width="18"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="w-1/2 border-r border-white/5 overflow-y-auto no-scrollbar">

<div className="grid grid-cols-12 px-6 py-3 border-b border-white/5 text-xs font-medium text-slate-500 uppercase tracking-wider sticky top-0 bg-[#0B0E14] z-10">
<div className="col-span-4">Caller</div>
<div className="col-span-3">Intent</div>
<div className="col-span-3">Status</div>
<div className="col-span-2 text-right">Time</div>
</div>


<div className="grid grid-cols-12 px-6 py-4 border-b border-white/5 bg-white/[0.02] cursor-pointer hover:bg-white/[0.04] transition-colors border-l-2 border-l-indigo-500">
<div className="col-span-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 text-xs">SM</div>
<div>
<div className="text-sm font-medium text-white">Sarah Miller</div>
<div className="text-xs text-slate-500">+1 (555) 012-3456</div>
</div>
</div>
<div className="col-span-3 flex items-center">
<span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium">Appointment</span>
</div>
<div className="col-span-3 flex items-center">
<span className="text-xs text-slate-300 flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Synced
                                </span>
</div>
<div className="col-span-2 text-right text-xs text-slate-500">Just now</div>
</div>

<div className="grid grid-cols-12 px-6 py-4 border-b border-white/5 cursor-pointer hover:bg-white/[0.02] transition-colors border-l-2 border-l-transparent">
<div className="col-span-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 text-xs">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-300">Unknown Caller</div>
<div className="text-xs text-slate-500">+1 (555) 987-6543</div>
</div>
</div>
<div className="col-span-3 flex items-center">
<span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-medium">Inquiry</span>
</div>
<div className="col-span-3 flex items-center">
<span className="text-xs text-slate-400 flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Processing
                                </span>
</div>
<div className="col-span-2 text-right text-xs text-slate-500">14m ago</div>
</div>

<div className="grid grid-cols-12 px-6 py-4 border-b border-white/5 cursor-pointer hover:bg-white/[0.02] transition-colors border-l-2 border-l-transparent">
<div className="col-span-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 text-xs">JD</div>
<div>
<div className="text-sm font-medium text-slate-300">John Davis</div>
<div className="text-xs text-slate-500">+1 (555) 234-5678</div>
</div>
</div>
<div className="col-span-3 flex items-center">
<span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-medium">Urgent</span>
</div>
<div className="col-span-3 flex items-center">
<span className="text-xs text-slate-300 flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Escalated
                                </span>
</div>
<div className="col-span-2 text-right text-xs text-slate-500">1h ago</div>
</div>

<div className="grid grid-cols-12 px-6 py-4 border-b border-white/5 cursor-pointer hover:bg-white/[0.02] transition-colors border-l-2 border-l-transparent">
<div className="col-span-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 text-xs">
<iconify-icon icon="solar:case-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-300">Vendor #4</div>
<div className="text-xs text-slate-500">+1 (555) 444-5555</div>
</div>
</div>
<div className="col-span-3 flex items-center">
<span className="px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-400 border border-white/10 text-xs font-medium">Logistics</span>
</div>
<div className="col-span-3 flex items-center">
<span className="text-xs text-slate-300 flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Synced
                                </span>
</div>
<div className="col-span-2 text-right text-xs text-slate-500">2h ago</div>
</div>
</div>

<div className="w-1/2 bg-[#0B0E14] flex flex-col">

<div className="h-12 border-b border-white/5 flex items-center justify-between px-6 bg-slate-900/20">
<div className="flex items-center gap-4">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Transcript</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-500 border border-white/5">02:14</span>
</div>
<div className="flex gap-2">
<button className="p-1.5 text-slate-500 hover:text-white transition-colors"><iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon></button>
<button className="p-1.5 text-slate-500 hover:text-white transition-colors"><iconify-icon icon="solar:export-linear" width="18"></iconify-icon></button>
</div>
</div>

<div className="flex-1 p-6 overflow-y-auto space-y-6">

<div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 mb-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-400" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-xs font-semibold text-indigo-300">AI Summary</span>
</div>
<p className="text-sm text-slate-300 leading-relaxed">
                                    Caller (Sarah) requested a consultation for a property dispute. Confirmed availability for Tuesday at 2 PM. Extracted case type: "Real Estate".
                                </p>
<div className="mt-3 flex gap-2">
<span className="px-2 py-1 rounded bg-indigo-500/10 text-[10px] font-medium text-indigo-300 border border-indigo-500/20">booked_appointment</span>
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] font-medium text-slate-400 border border-white/10">new_client</span>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400 mt-1">SM</div>
<div className="flex flex-col gap-1 max-w-[85%]">
<span className="text-xs text-slate-500">Sarah Miller • 00:04</span>
<div className="p-3 bg-white/5 border border-white/5 rounded-2xl rounded-tl-none text-sm text-slate-200">
                                        Hi, I was wondering if I could schedule a consultation with one of your partners regarding a property dispute?
                                    </div>
</div>
</div>

<div className="flex flex-row-reverse gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white mt-1">
<iconify-icon icon="solar:soundwave-square-linear" width="14"></iconify-icon>
</div>
<div className="flex flex-col items-end gap-1 max-w-[85%]">
<span className="text-xs text-slate-500">AI Assistant • 00:08</span>
<div className="p-3 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl rounded-tr-none text-sm text-indigo-100">
                                        I can certainly help you with that, Sarah. We have openings this Tuesday at 2 PM or Wednesday at 10 AM. Which works better for you?
                                    </div>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400 mt-1">SM</div>
<div className="flex flex-col gap-1 max-w-[85%]">
<span className="text-xs text-slate-500">Sarah Miller • 00:12</span>
<div className="p-3 bg-white/5 border border-white/5 rounded-2xl rounded-tl-none text-sm text-slate-200">
                                        Tuesday at 2 PM sounds perfect.
                                    </div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-[#0B0E14] flex justify-end gap-3">
<button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-medium border border-white/10 transition-colors">Listen to Recording</button>
<button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all">View in Salesforce</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none"></div>
<div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none"></div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Understand your business through conversations.</h2>
<p className="text-slate-400">Real-time insights on volume, intent, and performance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
<div className="flex justify-between items-start mb-6">
<div>
<div className="text-sm text-slate-400 font-medium">Call Volume</div>
<div className="text-3xl font-semibold text-white mt-1">1,248</div>
</div>
<div className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold">+12%</div>
</div>

<div className="flex items-end gap-1 h-16 opacity-50">
<div className="w-full bg-indigo-500 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500 h-[80%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500 h-[90%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500 h-[75%] rounded-t-sm"></div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6">
<div className="text-sm text-slate-400 font-medium mb-6">Intent Breakdown</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs text-slate-300 mb-1">
<span>New Appointments</span>
<span>45%</span>
</div>
<div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[45%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-slate-300 mb-1">
<span>General Inquiries</span>
<span>30%</span>
</div>
<div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-indigo-400 w-[30%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-slate-300 mb-1">
<span>Support</span>
<span>25%</span>
</div>
<div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
<div className="h-full bg-indigo-300 w-[25%]"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6">
<div className="text-sm text-slate-400 font-medium mb-4">Agent Configuration</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-200">After-hours mode</span>
<label className="flex items-center cursor-pointer relative" htmlFor="toggle1">
<input checked="" className="sr-only toggle-checkbox" id="toggle1" type="checkbox"/>
<div className="w-10 h-6 bg-slate-700 rounded-full toggle-label transition-colors"></div>
<div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-300 shadow-sm toggle-dot"></div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-200">Escalate angry callers</span>
<label className="flex items-center cursor-pointer relative" htmlFor="toggle2">
<input checked="" className="sr-only toggle-checkbox" id="toggle2" type="checkbox"/>
<div className="w-10 h-6 bg-slate-700 rounded-full toggle-label transition-colors"></div>
<div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-300 shadow-sm toggle-dot"></div>
</label>
</div>
<div className="pt-2">
<div className="text-xs text-slate-500 mb-2">Voice Persona</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-[10px] text-white">A1</div>
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] text-slate-400">A2</div>
<div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] text-slate-400">A3</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-900/30" id="integrations">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold text-white mb-10">No copy-paste. Everything syncs automatically.</h2>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><iconify-icon icon="solar:cloud-linear"></iconify-icon> Salesforce</div>
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><iconify-icon icon="solar:hub-linear"></iconify-icon> HubSpot</div>
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><iconify-icon icon="solar:notification-lines-remove-linear"></iconify-icon> Slack</div>
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Google Cal</div>
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-2"><iconify-icon icon="solar:code-circle-linear"></iconify-icon> Webhooks</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-900/10 blur-3xl -z-10"></div>
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">See what your phone system should have been.</h2>
<p className="text-slate-400 text-lg mb-10">Join 500+ businesses automating their front desk today.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-slate-950 font-semibold tracking-tight hover:bg-slate-200 transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Book a Demo
                </button>
<button className="h-12 px-8 rounded-full bg-transparent border border-white/10 text-white font-medium hover:bg-white/5 transition-colors w-full sm:w-auto">
                    View Pricing
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:soundwave-square-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight">VOX/AI</span>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Voice Agents</a></li>
<li><a className="hover:text-white transition-colors" href="#">Live Dashboard</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">DPA</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-600">
                    © 2024 VOX/AI Inc. All rights reserved.
                </div>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

<style>
        .toggle-checkbox:checked ~ .toggle-dot {
            transform: translateX(100%);
        }
    </style>

    </>
  );
}
