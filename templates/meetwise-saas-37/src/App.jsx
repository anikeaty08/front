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
brand: {
navy: '#0F172A',
light: '#F8FAFC',
offwhite: '#F1F5F9',
indigo: '#5E6AD2',
green: '#10B981',
amber: '#F59E0B'
}
}
}
}
}



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
      

<div aria-hidden="true" className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none"></div>

<header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-brand-indigo flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-brand-light">Meetwise</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-brand-light transition-colors" href="#product">Product</a>
<a className="hover:text-brand-light transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-brand-light transition-colors" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4 text-sm font-medium">
<a className="hidden md:block text-slate-400 hover:text-brand-light transition-colors" href="#">Log in</a>
<a className="bg-brand-indigo hover:bg-brand-indigo/90 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2" href="#">
                    Start Free Trial
                </a>
</div>
</div>
</header>
<main className="relative z-10 flex-grow pt-16">

<section className="py-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 overflow-hidden">
<div className="flex-1 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-semibold mb-8">
<span className="w-2 h-2 rounded-full bg-brand-indigo animate-pulse"></span>
                    Meetwise AI 2.0 is live
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-brand-light mb-6">
                    Turn meetings into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-blue-400">executed</span> action items
                </h1>
<p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    AI extracts tasks, assigns owners, and tracks completion automatically. Fast-growing remote teams save an average of 23 hours per week.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto bg-brand-indigo hover:bg-brand-indigo/90 text-white px-8 py-5 rounded-xl font-medium text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(94,106,210,0.3)]" href="#">
                        Start Free Trial
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto bg-transparent border border-white/10 hover:bg-white/5 text-brand-light px-8 py-5 rounded-xl font-medium text-lg transition-all flex items-center justify-center gap-2" href="#">
<i className="w-5 h-5 text-slate-400" data-lucide="play-circle" strokeWidth="1.5"></i>
                        Watch Demo
                    </a>
</div>
<div className="mt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-brand-green" data-lucide="check" strokeWidth="1.5"></i> 14-day free trial</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-brand-green" data-lucide="check" strokeWidth="1.5"></i> No credit card needed</span>
</div>
</div>
<div className="flex-1 w-full max-w-[600px] relative">

<div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/20 to-transparent blur-3xl rounded-full"></div>
<div className="relative bg-[#1E293B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-custom overflow-hidden">

<div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-700 border border-[#1E293B]"></div>
<div className="w-8 h-8 rounded-full bg-slate-600 border border-[#1E293B]"></div>
<div className="w-8 h-8 rounded-full bg-slate-500 border border-[#1E293B]"></div>
</div>
<span className="text-sm font-medium">Q3 Product Sync</span>
</div>
<div className="flex items-center gap-2 text-xs text-brand-green bg-brand-green/10 px-2 py-1 rounded">
<span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                            AI Analyzing
                        </div>
</div>

<div className="space-y-4">
<div className="bg-white/5 rounded-lg p-3 text-sm text-slate-300">
<span className="text-slate-500 text-xs block mb-1">Sarah (04:12)</span>
                            "Okay, so I'll need to update the API docs by Friday, and Mark, can you check the server load issues?"
                        </div>
<div className="flex justify-center py-2">
<i className="w-5 h-5 text-brand-indigo" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>

<div className="space-y-3">
<div className="bg-brand-navy border border-white/10 rounded-lg p-3 flex items-start gap-3">
<div className="mt-0.5 w-4 h-4 rounded border border-slate-600"></div>
<div>
<p className="text-sm font-medium text-brand-light">Update API documentation</p>
<div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="user" strokeWidth="1.5"></i> Sarah</span>
<span className="flex items-center gap-1 text-brand-amber"><i className="w-3 h-3" data-lucide="calendar" strokeWidth="1.5"></i> Friday</span>
<span className="flex items-center gap-1 text-brand-green"><i className="w-3 h-3" data-lucide="check-circle-2" strokeWidth="1.5"></i> Asana Sync</span>
</div>
</div>
</div>
<div className="bg-brand-navy border border-white/10 rounded-lg p-3 flex items-start gap-3">
<div className="mt-0.5 w-4 h-4 rounded border border-slate-600"></div>
<div>
<p className="text-sm font-medium text-brand-light">Investigate server load issues</p>
<div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="user" strokeWidth="1.5"></i> Mark</span>
<span className="flex items-center gap-1 text-brand-indigo"><i className="w-3 h-3" data-lucide="trello" strokeWidth="1.5"></i> Linear Sync</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">Trusted by fast-growing remote teams</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2"><i className="w-6 h-6" data-lucide="slack" strokeWidth="1.5"></i> Slack</span>
<span className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2"><i className="w-6 h-6" data-lucide="video" strokeWidth="1.5"></i> Zoom</span>
<span className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2"><i className="w-6 h-6" data-lucide="box" strokeWidth="1.5"></i> Notion</span>
<span className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2"><i className="w-6 h-6" data-lucide="figma" strokeWidth="1.5"></i> Figma</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/5 relative" id="product">
<div className="mb-16">
<div className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-6">The Problem</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-light mb-6 max-w-3xl leading-tight">
                    Meetings end. Action items get forgotten in the chaos.
                </h2>
<p className="text-lg text-slate-400 max-w-2xl">
                    Without structured follow-up, decisions turn to dust. Meetwise intercepts the chaos before it leaves the meeting room.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-white/10 pt-12 relative">

<div className="relative group">
<div className="flex items-center gap-4 mb-4">
<div className="bg-brand-offwhite rounded flex items-center justify-center w-8 h-8">
<i className="w-5 h-5 text-brand-navy" data-lucide="chevron-up" strokeWidth="2"></i>
</div>
<div className="text-5xl font-semibold tracking-tight text-brand-light">23h</div>
</div>
<div className="text-lg font-medium text-brand-light mb-3">Weekly time saved per team</div>
<p className="text-slate-400 text-lg leading-relaxed">
                        Reclaim almost a full workweek by eliminating manual notes, task delegation, and follow-up pings.
                    </p>
</div>

<div className="relative group">
<div className="flex items-center gap-4 mb-4">
<div className="bg-brand-offwhite rounded flex items-center justify-center w-8 h-8">
<i className="w-5 h-5 text-brand-navy" data-lucide="chevron-down" strokeWidth="2"></i>
</div>
<div className="text-5xl font-semibold tracking-tight text-brand-light">40%</div>
</div>
<div className="text-lg font-medium text-brand-light mb-3">Fewer dropped tasks</div>
<p className="text-slate-400 text-lg leading-relaxed">
                        Automatic assignment ensures every decision made on a call is tracked in your project management tool immediately.
                    </p>
</div>

<div className="relative group">
<div className="flex items-center gap-4 mb-4">
<div className="bg-brand-offwhite rounded flex items-center justify-center w-8 h-8">
<i className="w-5 h-5 text-brand-navy" data-lucide="chevron-up" strokeWidth="2"></i>
</div>
<div className="text-5xl font-semibold tracking-tight text-brand-light">3x</div>
</div>
<div className="text-lg font-medium text-brand-light mb-3">Faster execution speed</div>
<p className="text-slate-400 text-lg leading-relaxed">
                        Move from discussion to delivery without the administrative lag that slows down remote teams.
                    </p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-light mb-4">Meetwise AI agents handle it all</h2>
<p className="text-lg text-slate-400">Everything you need to turn talk into trackable progress.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 shadow-custom flex flex-col justify-between hover:bg-white/[0.04] transition-colors">
<div className="mb-8">
<div className="w-12 h-12 rounded-xl bg-brand-indigo/20 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-brand-indigo" data-lucide="scan-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-brand-light mb-3">Auto-extracts action items</h3>
<p className="text-lg text-slate-400">Our NLP models understand context, separating casual chatter from hard commitments and tasks.</p>
</div>

<div className="bg-[#0B1221] rounded-xl border border-white/10 p-4">
<div className="flex items-center gap-2 mb-2 text-sm text-slate-500"><i className="w-4 h-4" data-lucide="file-text" strokeWidth="1.5"></i> Transcript detected 3 tasks</div>
<div className="h-2 bg-white/10 rounded w-3/4 mb-2"></div>
<div className="h-2 bg-white/10 rounded w-1/2"></div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 shadow-custom flex flex-col justify-between hover:bg-white/[0.04] transition-colors">
<div className="mb-8">
<div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-brand-green" data-lucide="user-plus" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-brand-light mb-3">Smart task assignment</h3>
<p className="text-lg text-slate-400">Meetwise knows who is responsible based on voice recognition and historical project data.</p>
</div>

<div className="bg-[#0B1221] rounded-xl border border-white/10 p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-sm">JD</div>
<div className="flex-1">
<div className="text-sm font-medium mb-1">Assigned to John Doe</div>
<div className="text-xs text-slate-500">Confidence: 98%</div>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 shadow-custom flex flex-col justify-between hover:bg-white/[0.04] transition-colors">
<div className="mb-8">
<div className="w-12 h-12 rounded-xl bg-brand-amber/20 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-brand-amber" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-brand-light mb-3">Real-time progress tracking</h3>
<p className="text-lg text-slate-400">See the status of every meeting-generated task in one unified dashboard without pinging anyone.</p>
</div>

<div className="bg-[#0B1221] rounded-xl border border-white/10 p-4 space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-300">Design review</span>
<span className="text-brand-amber bg-brand-amber/10 px-2 py-0.5 rounded text-xs">In Progress</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-300">Deploy hotfix</span>
<span className="text-brand-green bg-brand-green/10 px-2 py-0.5 rounded text-xs">Completed</span>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 shadow-custom flex flex-col justify-between hover:bg-white/[0.04] transition-colors">
<div className="mb-8">
<div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-blue-400" data-lucide="network" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-brand-light mb-3">Deep Integrations</h3>
<p className="text-lg text-slate-400">Pushes tasks directly into Linear, Asana, Jira, and sends summaries straight to Slack.</p>
</div>

<div className="bg-[#0B1221] rounded-xl border border-white/10 p-4 flex justify-center gap-4">
<div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center"><i className="w-5 h-5" data-lucide="slack" strokeWidth="1.5"></i></div>
<div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center"><i className="w-5 h-5" data-lucide="trello" strokeWidth="1.5"></i></div>
<div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center"><i className="w-5 h-5" data-lucide="check-square" strokeWidth="1.5"></i></div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex bg-white/5 border border-white/10 hover:bg-white/10 text-brand-light px-6 py-3 rounded-lg font-medium text-lg transition-all items-center gap-2" href="#">
                    Start Free Trial <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-brand-navy/50 relative overflow-hidden" id="how-it-works">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(94,106,210,0.05)_0,transparent_100%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-light mb-4">How it works</h2>
<p className="text-lg text-slate-400">Zero friction. Install once, save hours forever.</p>
</div>
<div className="flex flex-col md:flex-row gap-8 relative">

<div className="hidden md:block absolute top-12 left-20 right-20 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="flex-1 text-center relative">
<div className="w-24 h-24 mx-auto bg-brand-navy border border-white/10 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-custom">
<span className="text-3xl font-semibold text-brand-indigo">1</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-brand-light mb-2">Invite to Meeting</h3>
<p className="text-lg text-slate-400">Meetwise joins your Zoom, Meet, or Teams call as a silent participant.</p>
</div>

<div className="flex-1 text-center relative">
<div className="w-24 h-24 mx-auto bg-brand-navy border border-white/10 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-custom">
<span className="text-3xl font-semibold text-brand-indigo">2</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-brand-light mb-2">AI Processing</h3>
<p className="text-lg text-slate-400">The agent transcribes, summarizes, and extracts action items in real-time.</p>
</div>

<div className="flex-1 text-center relative">
<div className="w-24 h-24 mx-auto bg-brand-navy border border-white/10 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-custom">
<span className="text-3xl font-semibold text-brand-indigo">3</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-brand-light mb-2">Tasks Pushed</h3>
<p className="text-lg text-slate-400">Tickets are created in Linear/Asana and summaries posted in Slack.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="flex justify-center items-center gap-1 mb-4">
<i className="w-5 h-5 text-brand-amber fill-brand-amber" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-brand-amber fill-brand-amber" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-brand-amber fill-brand-amber" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-brand-amber fill-brand-amber" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-brand-amber fill-brand-amber" data-lucide="star" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-brand-light mb-2">4.9/5 from 2,847 teams</h2>
<p className="text-lg text-slate-400">The highest rated meeting AI on G2.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
<p className="text-lg text-brand-light mb-8 leading-relaxed">"It feels like magic. We used to spend 15 minutes after every product sync just writing up tickets. Now it happens instantly while we're saying goodbye."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500"></div>
<div>
<div className="font-medium text-sm text-brand-light">Alex Chen</div>
<div className="text-sm text-slate-500">VP Eng, Acme Corp</div>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
<p className="text-lg text-brand-light mb-8 leading-relaxed">"Meetwise fundamentally changed our remote culture. We have fewer meetings now because trust is higher—everyone knows tasks are being tracked."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500"></div>
<div>
<div className="font-medium text-sm text-brand-light">Sarah Jenkins</div>
<div className="text-sm text-slate-500">COO, StartupX</div>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
<p className="text-lg text-brand-light mb-8 leading-relaxed">"The Linear integration is flawless. It perfectly maps meeting contexts to epics and assigns the right developers automatically. Incredible tool."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500"></div>
<div>
<div className="font-medium text-sm text-brand-light">Marcus Thorne</div>
<div className="text-sm text-slate-500">Product Lead, Velocity</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-light mb-4">Simple, transparent pricing</h2>
<p className="text-lg text-slate-400">Start free, upgrade when your team needs more power.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">

<div className="border border-white/10 rounded-2xl p-8 bg-white/[0.01]">
<h3 className="text-xl font-semibold text-brand-light mb-2">Free</h3>
<div className="mb-6"><span className="text-4xl font-semibold tracking-tight text-white">$0</span> <span className="text-slate-500">/mo</span></div>
<p className="text-slate-400 text-sm mb-6 h-10">Perfect for individuals trying out AI notes.</p>
<a className="block w-full text-center py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium mb-8" href="#">Get Started</a>
<ul className="space-y-4 text-sm text-slate-300">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-green" data-lucide="check" strokeWidth="2"></i> 5 meetings per month</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-green" data-lucide="check" strokeWidth="2"></i> Basic transcripts</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-green" data-lucide="check" strokeWidth="2"></i> 7-day history</li>
</ul>
</div>

<div className="border border-brand-indigo rounded-2xl p-8 bg-brand-indigo/5 relative shadow-[0_0_40px_rgba(94,106,210,0.1)] transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-indigo text-white text-xs font-semibold px-3 py-1 rounded-full">MOST POPULAR</div>
<h3 className="text-xl font-semibold text-brand-light mb-2">Teams</h3>
<div className="mb-6"><span className="text-4xl font-semibold tracking-tight text-white">$12</span> <span className="text-slate-500">/user/mo</span></div>
<p className="text-slate-400 text-sm mb-6 h-10">For remote teams that want to execute faster.</p>
<a className="block w-full text-center py-2.5 rounded-lg bg-brand-indigo hover:bg-brand-indigo/90 text-white transition-colors font-medium mb-8" href="#">Start Free Trial</a>
<ul className="space-y-4 text-sm text-slate-300">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-indigo" data-lucide="check" strokeWidth="2"></i> Unlimited meetings</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-indigo" data-lucide="check" strokeWidth="2"></i> AI Action item extraction</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-indigo" data-lucide="check" strokeWidth="2"></i> Linear, Asana, Slack integrations</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-indigo" data-lucide="check" strokeWidth="2"></i> Unlimited history</li>
</ul>
</div>

<div className="border border-white/10 rounded-2xl p-8 bg-white/[0.01]">
<h3 className="text-xl font-semibold text-brand-light mb-2">Enterprise</h3>
<div className="mb-6"><span className="text-4xl font-semibold tracking-tight text-white">Custom</span></div>
<p className="text-slate-400 text-sm mb-6 h-10">Advanced security and custom workflows.</p>
<a className="block w-full text-center py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium mb-8" href="#">Contact Sales</a>
<ul className="space-y-4 text-sm text-slate-300">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-green" data-lucide="check" strokeWidth="2"></i> Everything in Teams</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-green" data-lucide="check" strokeWidth="2"></i> SSO &amp; SAML</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-brand-green" data-lucide="check" strokeWidth="2"></i> Dedicated account manager</li>
</ul>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-indigo/10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-brand-light mb-6">
                    Ready to transform your meetings?
                </h2>
<p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Join 2,847 teams who have stopped writing manual notes and started executing faster.
                </p>
<div className="flex flex-col items-center gap-4">
<a className="bg-brand-indigo hover:bg-brand-indigo/90 text-white px-10 py-5 rounded-xl font-medium text-lg transition-all shadow-[0_0_40px_rgba(94,106,210,0.4)]" href="#">
                        Start 14-day free trial
                    </a>
<span className="text-sm text-slate-500">No credit card required. Setup in 2 minutes.</span>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 bg-brand-navy">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-brand-indigo flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="zap" strokeWidth="2"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-brand-light">Meetwise</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-brand-light transition-colors" href="#">Twitter</a>
<a className="hover:text-brand-light transition-colors" href="#">LinkedIn</a>
<a className="hover:text-brand-light transition-colors" href="#">Privacy</a>
<a className="hover:text-brand-light transition-colors" href="#">Terms</a>
</div>
<div className="text-sm text-slate-600">
                © 2026 Meetwise Inc. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
