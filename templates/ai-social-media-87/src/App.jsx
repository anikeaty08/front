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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'float': '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
'glow': '0 0 40px -10px rgba(139, 92, 246, 0.3)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:programming-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">FlowPilot</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-all shadow-sm" href="#">Start Free Trial</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl pointer-events-none opacity-40">
<div className="absolute top-20 left-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
<div className="absolute top-20 right-10 w-72 h-72 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Automate Your Social Media With AI
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-normal">
                FlowPilot helps creators and teams plan, schedule, and analyze social media content automatically using AI.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-md flex items-center justify-center gap-2" href="#">
                    Start Free Trial
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-base font-medium px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-sm" href="#">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Watch Demo
                </a>
</div>

<div className="relative max-w-5xl mx-auto perspective-1000">
<div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-slate-200/60 shadow-float overflow-hidden relative z-10">

<div className="bg-slate-50/50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>

<div className="flex flex-col md:flex-row min-h-[400px]">

<div className="hidden md:block w-56 border-r border-slate-100 p-4 bg-slate-50/30">
<div className="space-y-3">
<div className="h-8 w-full bg-slate-100 rounded-lg"></div>
<div className="h-8 w-3/4 bg-slate-50 rounded-lg"></div>
<div className="h-8 w-5/6 bg-slate-50 rounded-lg"></div>
<div className="h-8 w-full bg-violet-50 text-violet-600 flex items-center px-3 rounded-lg text-sm font-medium gap-2">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon> Calendar
                                </div>
<div className="h-8 w-2/3 bg-slate-50 rounded-lg"></div>
</div>
</div>

<div className="flex-1 p-6 bg-white/50">
<div className="flex justify-between items-center mb-6">
<div className="h-6 w-32 bg-slate-100 rounded-md"></div>
<div className="h-8 w-24 bg-slate-900 rounded-full"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
<div className="text-xs text-slate-400 mb-1">Total Reach</div>
<div className="text-xl font-semibold tracking-tight text-slate-800">124.5K</div>
<div className="text-xs text-emerald-500 mt-1 flex items-center gap-1"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> +12%</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
<div className="text-xs text-slate-400 mb-1">Engagement</div>
<div className="text-xl font-semibold tracking-tight text-slate-800">8.2%</div>
<div className="text-xs text-emerald-500 mt-1 flex items-center gap-1"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> +4%</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hidden md:block">
<div className="text-xs text-slate-400 mb-1">New Followers</div>
<div className="text-xl font-semibold tracking-tight text-slate-800">1,240</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hidden md:block">
<div className="text-xs text-slate-400 mb-1">Scheduled</div>
<div className="text-xl font-semibold tracking-tight text-slate-800">24</div>
</div>
</div>

<div className="h-48 w-full bg-slate-50 rounded-xl border border-slate-100 p-4 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-full" style={{background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0) 100%)'}}></div>
<svg className="w-full h-full relative z-10" preserveaspectratio="none" viewbox="0 0 100 30">
<path d="M0,25 C10,20 20,28 30,15 C40,2 50,18 60,10 C70,2 80,15 90,5 L100,8" fill="none" stroke="#8b5cf6" strokeLinecap="round" strokeWidth="0.5"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex absolute -left-12 top-1/4 bg-white p-3 rounded-xl shadow-float border border-slate-100 items-center gap-3 z-20 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div className="text-left">
<div className="text-sm font-medium text-slate-800">Post Published</div>
<div className="text-xs text-slate-500">Just now on Twitter</div>
</div>
</div>
<div className="hidden lg:flex absolute -right-8 bottom-1/4 bg-white p-4 rounded-xl shadow-float border border-slate-100 items-center gap-3 z-20 animate-bounce" style={{animationDuration: '4s'}}>
<div className="w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<div className="text-left">
<div className="text-sm font-medium text-slate-800">AI Caption Ready</div>
<div className="text-xs text-slate-500">Click to review</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-400 mb-8 tracking-wide">TRUSTED BY INNOVATIVE TEAMS WORLDWIDE</p>
<div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-60 grayscale">

<span className="text-xl font-semibold tracking-widest text-slate-800 uppercase">Stripe</span>
<span className="text-xl font-semibold tracking-widest text-slate-800 uppercase">Slack</span>
<span className="text-xl font-semibold tracking-widest text-slate-800 uppercase">Shopify</span>
<span className="text-xl font-semibold tracking-widest text-slate-800 uppercase">Notion</span>
<span className="text-xl font-semibold tracking-widest text-slate-800 uppercase">Zapier</span>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Everything you need to grow</h2>
<p className="text-slate-500 text-lg">Powerful features wrapped in a simple, intuitive interface designed for modern creators and marketing teams.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-soft hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">AI Content Planner</h3>
<p className="text-slate-500 text-sm leading-relaxed">Generate and organize your social media content automatically. Let AI suggest topics, write captions, and build your calendar.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-soft hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Smart Scheduling</h3>
<p className="text-slate-500 text-sm leading-relaxed">Automatically publish content at the best time. Our algorithms analyze your audience to maximize reach and engagement.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-soft hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Advanced Analytics</h3>
<p className="text-slate-500 text-sm leading-relaxed">Track engagement, reach, and performance across platforms in one unified dashboard with beautiful, actionable reports.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 md:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Manage everything from a single pane of glass</h2>
<p className="text-slate-400 text-lg">Stop jumping between apps. FlowPilot brings your entire social strategy into one beautiful, lightning-fast dashboard.</p>
</div>

<div className="rounded-2xl border border-slate-700/50 bg-[#0f172a] shadow-2xl overflow-hidden relative">

<div className="border-b border-slate-800 bg-[#1e293b]/50 p-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
</div>
<div className="h-6 w-48 bg-slate-800 rounded-md"></div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-24 bg-violet-600 rounded-md"></div>
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
</div>
</div>
<div className="flex">

<div className="w-64 border-r border-slate-800 bg-[#0f172a] p-4 hidden lg:block min-h-[500px]">
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 rounded-md bg-slate-800 text-white text-sm font-medium"><iconify-icon icon="solar:pie-chart-2-linear" width="18"></iconify-icon> Overview</div>
<div className="flex items-center gap-3 p-2 rounded-md text-slate-400 text-sm hover:text-white"><iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon> Calendar</div>
<div className="flex items-center gap-3 p-2 rounded-md text-slate-400 text-sm hover:text-white"><iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon> Drafts</div>
<div className="flex items-center gap-3 p-2 rounded-md text-slate-400 text-sm hover:text-white"><iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon> Audience</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 bg-gradient-to-br from-[#0f172a] to-[#1e293b]/50">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
<div className="flex justify-between items-start mb-2">
<div className="text-sm text-slate-400">Total Audience</div>
<iconify-icon className="text-slate-500" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="text-3xl font-semibold tracking-tight">842.5K</div>
<div className="text-xs text-emerald-400 mt-2 flex items-center gap-1"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 2.4% vs last month</div>
</div>
<div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
<div className="flex justify-between items-start mb-2">
<div className="text-sm text-slate-400">Engagement Rate</div>
<iconify-icon className="text-slate-500" icon="solar:heart-linear"></iconify-icon>
</div>
<div className="text-3xl font-semibold tracking-tight">5.2%</div>
<div className="text-xs text-emerald-400 mt-2 flex items-center gap-1"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 1.1% vs last month</div>
</div>
<div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hidden md:block">
<div className="flex justify-between items-start mb-2">
<div className="text-sm text-slate-400">Posts Published</div>
<iconify-icon className="text-slate-500" icon="solar:document-add-linear"></iconify-icon>
</div>
<div className="text-3xl font-semibold tracking-tight">142</div>
<div className="text-xs text-slate-400 mt-2">This month</div>
</div>
</div>

<div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 h-64 relative">
<div className="flex justify-between items-center mb-4">
<div className="text-sm font-medium">Performance Overview</div>
<div className="h-6 w-20 bg-slate-700 rounded flex items-center justify-center text-xs text-slate-300">30 Days</div>
</div>

<div className="absolute inset-0 top-16 left-6 right-6 bottom-6 flex items-end">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,35 C15,30 25,10 40,20 C55,30 65,5 80,15 L100,5" fill="none" stroke="#a78bfa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
<path d="M0,38 C20,35 30,25 45,30 C60,35 70,20 85,25 L100,15" fill="none" stroke="#38bdf8" stroke-dasharray="2 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">How FlowPilot works</h2>
<p className="text-slate-500 text-lg">Three simple steps to put your social media on autopilot.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-slate-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 text-slate-800">
<iconify-icon icon="solar:link-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-xs font-medium text-violet-600 mb-2 uppercase tracking-wide">Step 1</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Connect accounts</h3>
<p className="text-slate-500 text-sm px-4">Link your Instagram, Twitter, LinkedIn, and other platforms in seconds securely.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 text-slate-800">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-xs font-medium text-violet-600 mb-2 uppercase tracking-wide">Step 2</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Let AI generate</h3>
<p className="text-slate-500 text-sm px-4">Set your brand voice and let our AI generate tailored content calendars for you.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 text-slate-800">
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-xs font-medium text-violet-600 mb-2 uppercase tracking-wide">Step 3</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Publish &amp; Track</h3>
<p className="text-slate-500 text-sm px-4">Review, approve, and let FlowPilot publish automatically while tracking results.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Everything included</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col gap-3">
<iconify-icon className="text-slate-700" icon="solar:calendar-date-linear" width="24"></iconify-icon>
<div className="font-medium text-slate-900 text-sm">Automated Posting</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col gap-3">
<iconify-icon className="text-slate-700" icon="solar:lightbulb-minimalistic-linear" width="24"></iconify-icon>
<div className="font-medium text-slate-900 text-sm">Content Ideas Generator</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col gap-3">
<iconify-icon className="text-slate-700" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<div className="font-medium text-slate-900 text-sm">Team Collaboration</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col gap-3">
<iconify-icon className="text-slate-700" icon="solar:pen-linear" width="24"></iconify-icon>
<div className="font-medium text-slate-900 text-sm">AI Caption Generator</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col gap-3">
<iconify-icon className="text-slate-700" icon="solar:chart-linear" width="24"></iconify-icon>
<div className="font-medium text-slate-900 text-sm">Performance Insights</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col gap-3">
<iconify-icon className="text-slate-700" icon="solar:target-linear" width="24"></iconify-icon>
<div className="font-medium text-slate-900 text-sm">Smart Recommendations</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900 mb-16">Loved by marketing teams</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-soft">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"FlowPilot saved our marketing team hours every week. The AI caption generation is scarily accurate to our brand voice."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<div className="text-sm font-medium text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500">Marketing Director</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-soft">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"The analytics dashboard is beautiful. We finally have a clear picture of what's working across all our social channels without using messy spreadsheets."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<div className="text-sm font-medium text-slate-900">David Chen</div>
<div className="text-xs text-slate-500">Startup Founder</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-soft">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"I manage accounts for 5 different clients. FlowPilot's workspace organization and smart scheduling completely eliminated my daily stress."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<div className="text-sm font-medium text-slate-900">Emma Watson</div>
<div className="text-xs text-slate-500">Freelance SMM</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-100" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Simple, transparent pricing</h2>
<p className="text-slate-500 text-lg">Start for free, upgrade when you need to.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
<div className="text-sm font-medium text-slate-500 mb-2">Starter</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$9</span>
<span className="text-sm text-slate-500">/month</span>
</div>
<p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">Perfect for individual creators starting out.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> 3 Social Profiles</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> 50 AI Generated Posts/mo</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Basic Analytics</li>
</ul>
<a className="block w-full text-center bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-medium py-3 rounded-xl transition-colors border border-slate-200" href="#">Get Started</a>
</div>

<div className="bg-white rounded-3xl p-8 border-2 border-violet-500 shadow-xl shadow-violet-100 relative md:-mt-8 md:mb-8">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-500 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<div className="text-sm font-medium text-violet-600 mb-2">Pro</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$29</span>
<span className="text-sm text-slate-500">/month</span>
</div>
<p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">For growing businesses and professional marketers.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-violet-500" icon="solar:check-circle-linear"></iconify-icon> 10 Social Profiles</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-violet-500" icon="solar:check-circle-linear"></iconify-icon> Unlimited AI Posts</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-violet-500" icon="solar:check-circle-linear"></iconify-icon> Advanced Analytics</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-violet-500" icon="solar:check-circle-linear"></iconify-icon> Team Collaboration (3 users)</li>
</ul>
<a className="block w-full text-center bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium py-3 rounded-xl transition-colors shadow-sm shadow-violet-200" href="#">Start 14-Day Free Trial</a>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
<div className="text-sm font-medium text-slate-500 mb-2">Business</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$79</span>
<span className="text-sm text-slate-500">/month</span>
</div>
<p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">For agencies managing multiple clients.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Unlimited Profiles</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Custom AI Voice Models</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Custom Reports &amp; Export</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Unlimited Users</li>
</ul>
<a className="block w-full text-center bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-medium py-3 rounded-xl transition-colors border border-slate-200" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8">Connects seamlessly with your favorite platforms</p>
<div className="flex flex-wrap justify-center gap-6 md:gap-12 text-slate-400">

<div className="flex items-center gap-2 hover:text-slate-800 transition-colors cursor-pointer"><iconify-icon icon="solar:camera-square-linear" width="28"></iconify-icon> Instagram</div>
<div className="flex items-center gap-2 hover:text-slate-800 transition-colors cursor-pointer"><iconify-icon icon="solar:letter-opened-linear" width="28"></iconify-icon> Twitter / X</div>
<div className="flex items-center gap-2 hover:text-slate-800 transition-colors cursor-pointer"><iconify-icon icon="solar:case-minimalistic-linear" width="28"></iconify-icon> LinkedIn</div>
<div className="flex items-center gap-2 hover:text-slate-800 transition-colors cursor-pointer"><iconify-icon icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon> Facebook</div>
<div className="flex items-center gap-2 hover:text-slate-800 transition-colors cursor-pointer"><iconify-icon icon="solar:play-stream-linear" width="28"></iconify-icon> YouTube</div>
<div className="flex items-center gap-2 hover:text-slate-800 transition-colors cursor-pointer"><iconify-icon icon="solar:music-note-2-linear" width="28"></iconify-icon> TikTok</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-gradient-to-br from-violet-100 via-white to-blue-50 rounded-[2.5rem] p-12 md:p-20 text-center border border-white shadow-xl shadow-slate-200/50 relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl opacity-60"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6 max-w-2xl mx-auto leading-tight">
                    Start Growing Your Social Media With AI
                </h2>
<p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">Join thousands of creators and brands who have automated their workflow and increased engagement.</p>
<a className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-base font-medium px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl" href="#">
                    Start Free Trial
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<p className="mt-4 text-xs text-slate-400">No credit card required. 14-day free trial.</p>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">

<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:programming-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-base tracking-tight text-slate-900">FlowPilot</span>
</div>
<p className="text-sm text-slate-500 mb-4 pr-4">The ultimate AI social media automation platform for modern teams.</p>
</div>

<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Features</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Integrations</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Help Center</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">© 2024 FlowPilot Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-slate-600" href="#"><iconify-icon icon="solar:letter-opened-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-600" href="#"><iconify-icon icon="solar:camera-square-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-600" href="#"><iconify-icon icon="solar:case-minimalistic-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
