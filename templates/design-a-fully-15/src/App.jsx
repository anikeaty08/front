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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-900/20 glow-orb"></div>
<div className="fixed bottom-0 right-0 w-[600px] h-[500px] bg-cyan-900/10 glow-orb"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030305]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:box" data-width="20"></span>
<span className="text-white font-medium tracking-tight text-sm">TEC EXPO</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-slate-500">
<a className="hover:text-white transition-colors" href="#overview">Overview</a>
<a className="hover:text-white transition-colors" href="#halls">Experience</a>
<a className="hover:text-white transition-colors" href="#schedule">Schedule</a>
</div>
<a className="group flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 transition-all" href="#register">
<span className="text-xs font-medium text-white group-hover:text-indigo-300 transition-colors">Get Passes</span>
<span className="iconify text-slate-400 group-hover:text-indigo-300 transition-colors" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-indigo-300">Expo Center Karachi</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
            The Future <br/>
<span className="text-gradient-primary">Converges Here.</span>
</h1>
<p className="max-w-2xl text-lg md:text-xl text-slate-400 font-light mb-10 leading-relaxed">
            A two-day immersive journey into the vanguard of Technology, Education, and Career growth. Connect with the architects of tomorrow.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg font-medium text-sm tracking-tight hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                Register Now
                <span className="iconify" data-icon="lucide:ticket" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-8 py-4 glass text-white rounded-lg font-medium text-sm tracking-tight hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                Download Brochure
                <span className="iconify" data-icon="lucide:download" data-width="16"></span>
</button>
</div>
<div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce">
<span className="iconify text-slate-600" data-icon="lucide:chevron-down" data-width="24"></span>
</div>
</section>

<section className="relative py-32 px-6 z-10 border-t border-white/5 bg-[#030305]" id="overview">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Global Scale.<br/>Local Impact.</h2>
<p className="text-slate-400 leading-relaxed mb-8">
                        The TEC Expo bridges the gap between ambition and opportunity. Designed for students, professionals, and visionaries, this event transforms the Karachi Expo Center into a hub of innovation for 48 hours of non-stop value.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-1" data-icon="lucide:check-circle" data-width="18"></span>
<span className="text-sm text-slate-300">50,000+ Expected Attendees</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-1" data-icon="lucide:check-circle" data-width="18"></span>
<span className="text-sm text-slate-300">100+ Industry Leaders &amp; Speakers</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 mt-1" data-icon="lucide:check-circle" data-width="18"></span>
<span className="text-sm text-slate-300">Live Hackathons &amp; Recruitment Drives</span>
</li>
</ul>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="glass p-6 rounded-xl flex flex-col items-start gap-4 hover:bg-white/5 transition-colors duration-500">
<div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-white font-medium">Innovation</h3>
<p className="text-xs text-slate-500 leading-relaxed">Showcasing breakthrough startups and cutting-edge tech from across the region.</p>
</div>
<div className="glass p-6 rounded-xl flex flex-col items-start gap-4 hover:bg-white/5 transition-colors duration-500 mt-0 sm:mt-12">
<div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="text-white font-medium">Networking</h3>
<p className="text-xs text-slate-500 leading-relaxed">Structured opportunities to meet mentors, employers, and co-founders.</p>
</div>
<div className="glass p-6 rounded-xl flex flex-col items-start gap-4 hover:bg-white/5 transition-colors duration-500">
<div className="p-3 rounded-lg bg-amber-500/10 text-amber-400">
<span className="iconify" data-icon="lucide:book-open" data-width="24"></span>
</div>
<h3 className="text-white font-medium">Education</h3>
<p className="text-xs text-slate-500 leading-relaxed">Workshops designed to upgrade skills in AI, Blockchain, and Soft Skills.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 z-10" id="halls">
<div className="max-w-7xl mx-auto mb-20">
<h2 className="text-sm font-medium text-indigo-400 uppercase tracking-widest mb-2">The Experience</h2>
<h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight">Navigate the Future</h3>
</div>
<div className="flex flex-col gap-12 max-w-7xl mx-auto">

<div className="group relative grid md:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-white/10 bg-[#08080a]">
<div className="md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-br from-slate-900 to-black flex flex-col justify-between">
<div>
<div className="inline-block px-2 py-1 mb-4 rounded border border-slate-700 bg-slate-800/50 text-[10px] uppercase text-slate-300 tracking-widest hall-number">Hall 1 &amp; 2</div>
<h4 className="text-2xl font-medium text-white mb-2">Entry Test Zone</h4>
<p className="text-sm text-slate-400">The first step to excellence. Structured academic testing environments.</p>
</div>
<div className="mt-8 flex gap-4">
<div className="flex flex-col">
<span className="text-2xl font-light text-white">09:00</span>
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Start Time</span>
</div>
<div className="w-px h-full bg-white/10"></div>
<div className="flex flex-col">
<span className="text-2xl font-light text-white">2.5k</span>
<span className="text-[10px] text-slate-500 uppercase tracking-wider">Capacity</span>
</div>
</div>
</div>
<div className="md:col-span-8 p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
<div className="grid grid-cols-2 gap-6 relative z-10">
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="p-2 rounded bg-white/5 text-slate-300"><span className="iconify" data-icon="lucide:clipboard-check" data-width="20"></span></div>
<div>
<h5 className="text-sm text-white font-medium">Digital Assessment</h5>
<p className="text-xs text-slate-500 mt-1">Tablet-based testing for instant results and analytics.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 rounded bg-white/5 text-slate-300"><span className="iconify" data-icon="lucide:shield-check" data-width="20"></span></div>
<div>
<h5 className="text-sm text-white font-medium">Secure Environment</h5>
<p className="text-xs text-slate-500 mt-1">Biometric verification and proctored zones.</p>
</div>
</div>
</div>
<div className="flex items-center justify-center">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">
                                View Requirements <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</div>
</div>

<div className="group relative grid md:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-purple-500/20 bg-[#08080a] shadow-[0_0_40px_-10px_rgba(168,85,247,0.1)]">
<div className="md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-br from-[#1a1025] to-black flex flex-col justify-between">
<div>
<div className="inline-block px-2 py-1 mb-4 rounded border border-purple-500/30 bg-purple-500/10 text-[10px] uppercase text-purple-300 tracking-widest hall-number">Hall 3</div>
<h4 className="text-2xl font-medium text-white mb-2">Hackathon Arena</h4>
<p className="text-sm text-slate-400">48 Hours. One Problem Statement. Infinite Possibilities.</p>
</div>
<div className="mt-8">
<div className="inline-flex items-center gap-2 px-3 py-2 rounded bg-purple-500/10 border border-purple-500/20 w-full">
<span className="iconify text-purple-400" data-icon="lucide:users" data-width="16"></span>
<span className="text-xs text-purple-200">Team Entry Only (4 Members)</span>
</div>
</div>
</div>
<div className="md:col-span-8 p-8 md:p-12 relative">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/lucide:grid.svg?color=%23ffffff&amp;opacity=0.03')] opacity-20"></div>
<div className="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
<div className="space-y-6 flex-1">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono text-sm">1</div>
<p className="text-sm text-slate-300">Form your squad of 4 specialists.</p>
</div>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono text-sm">2</div>
<p className="text-sm text-slate-300">Receive problem statement on-site.</p>
</div>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono text-sm">3</div>
<p className="text-sm text-slate-300">Build, Deploy, Pitch. Win Big.</p>
</div>
</div>
<div className="flex-shrink-0">
<button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-purple-900/20">
                                Register Team
                            </button>
</div>
</div>
</div>
</div>

<div className="group relative grid md:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-white/10 bg-[#08080a]">
<div className="md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-br from-slate-900 to-black flex flex-col justify-between">
<div>
<div className="inline-block px-2 py-1 mb-4 rounded border border-teal-700 bg-teal-900/20 text-[10px] uppercase text-teal-400 tracking-widest hall-number">Hall 4</div>
<h4 className="text-2xl font-medium text-white mb-2">Workshop Zone</h4>
<p className="text-sm text-slate-400">Interactive sessions with global industry veterans.</p>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-slate-400">AI/ML</span>
<span className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-slate-400">Cybersecurity</span>
<span className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-slate-400">Design Systems</span>
</div>
</div>
<div className="md:col-span-8 p-8 md:p-12 relative">
<div className="grid sm:grid-cols-2 gap-4">

<div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-teal-500/30 transition-colors cursor-pointer group/card">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-teal-400">10:00 AM</span>
<span className="iconify text-slate-600 group-hover/card:text-teal-400 transition-colors" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<h5 className="text-sm text-white font-medium mb-1">The Future of Fintech</h5>
<p className="text-xs text-slate-500">Building scalable financial infrastructure.</p>
</div>

<div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-teal-500/30 transition-colors cursor-pointer group/card">
<div className="flex justify-between items-start mb-3">
<span className="text-[10px] font-mono text-teal-400">02:00 PM</span>
<span className="iconify text-slate-600 group-hover/card:text-teal-400 transition-colors" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<h5 className="text-sm text-white font-medium mb-1">Generative AI at Scale</h5>
<p className="text-xs text-slate-500">From prompt engineering to model training.</p>
</div>
</div>
</div>
</div>

<div className="group relative grid md:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-white/10 bg-[#08080a]">
<div className="md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-br from-slate-900 to-black flex flex-col justify-between">
<div>
<div className="inline-block px-2 py-1 mb-4 rounded border border-amber-700 bg-amber-900/20 text-[10px] uppercase text-amber-400 tracking-widest hall-number">Hall 5</div>
<h4 className="text-2xl font-medium text-white mb-2">Job Fair</h4>
<p className="text-sm text-slate-400">Accelerate your career. Meet recruiters from top-tier tech firms.</p>
</div>
<div className="mt-8">
<a className="text-xs text-white border-b border-amber-500/50 pb-1 hover:text-amber-400 transition-colors" href="#">Upload Resume Pre-Event</a>
</div>
</div>
<div className="md:col-span-8 p-8 md:p-12 flex items-center justify-center relative bg-gradient-to-b from-transparent to-amber-900/5">
<div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 opacity-60">

<div className="h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center"><span className="iconify text-slate-500" data-icon="lucide:building-2" data-width="20"></span></div>
<div className="h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center"><span className="iconify text-slate-500" data-icon="lucide:briefcase" data-width="20"></span></div>
<div className="h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center"><span className="iconify text-slate-500" data-icon="lucide:globe" data-width="20"></span></div>
<div className="h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center"><span className="iconify text-slate-500" data-icon="lucide:cpu" data-width="20"></span></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<button className="glass px-6 py-2 rounded-full text-xs font-medium text-white hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all">
                            View 50+ Companies
                        </button>
</div>
</div>
</div>

<div className="group relative grid md:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-white/5 bg-[#08080a] opacity-80 hover:opacity-100 transition-opacity">
<div className="md:col-span-12 p-8 flex items-center justify-between bg-[url('https://api.iconify.design/lucide:circuit-board.svg?color=%23333333&amp;opacity=0.1')] bg-repeat">
<div className="flex items-center gap-6">
<div className="inline-block px-2 py-1 rounded border border-slate-700 bg-slate-800 text-[10px] uppercase text-slate-300 tracking-widest hall-number">Hall 6</div>
<div>
<h4 className="text-lg font-medium text-white">Startup Showcase</h4>
<p className="text-xs text-slate-500">The bleeding edge of innovation. Prototype demos.</p>
</div>
</div>
<span className="iconify text-slate-600" data-icon="lucide:rocket" data-width="24"></span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#050505]" id="schedule">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Event Timeline</h2>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"></div>

<div className="mb-12 relative">
<div className="sticky top-20 z-20 bg-[#050505] py-2 mb-6 border-b border-white/10 inline-block">
<span className="text-indigo-400 font-mono text-sm">DAY 01 — NOV 15</span>
</div>

<div className="relative md:w-1/2 md:pr-12 md:text-right mb-8 ml-12 md:ml-0">
<div className="absolute left-[-37px] md:right-[-5px] md:left-auto top-2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] z-10"></div>
<h4 className="text-white font-medium">Opening Ceremony</h4>
<p className="text-xs text-slate-500 mb-1">09:00 AM - Main Auditorium</p>
<p className="text-sm text-slate-400">Keynote by Minister of IT &amp; Telecom.</p>
</div>

<div className="relative md:w-1/2 md:ml-auto md:pl-12 mb-8 ml-12">
<div className="absolute left-[-37px] md:left-[-5px] top-2 w-3 h-3 rounded-full bg-[#1a1a1a] border border-indigo-500 z-10"></div>
<h4 className="text-white font-medium">Hackathon Kickoff</h4>
<p className="text-xs text-slate-500 mb-1">11:00 AM - Hall 3</p>
<p className="text-sm text-slate-400">Problem statement reveal and team formation.</p>
</div>

<div className="relative md:w-1/2 md:pr-12 md:text-right mb-8 ml-12 md:ml-0">
<div className="absolute left-[-37px] md:right-[-5px] md:left-auto top-2 w-3 h-3 rounded-full bg-[#1a1a1a] border border-indigo-500 z-10"></div>
<h4 className="text-white font-medium">Tech Talks Series A</h4>
<p className="text-xs text-slate-500 mb-1">02:00 PM - Hall 4</p>
<p className="text-sm text-slate-400">Cloud Computing trends for 2025.</p>
</div>
</div>

<div className="relative">
<div className="sticky top-20 z-20 bg-[#050505] py-2 mb-6 border-b border-white/10 inline-block">
<span className="text-purple-400 font-mono text-sm">DAY 02 — NOV 16</span>
</div>

<div className="relative md:w-1/2 md:ml-auto md:pl-12 mb-8 ml-12">
<div className="absolute left-[-37px] md:left-[-5px] top-2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10"></div>
<h4 className="text-white font-medium">Entry Test &amp; Assessment</h4>
<p className="text-xs text-slate-500 mb-1">09:00 AM - Hall 1 &amp; 2</p>
<p className="text-sm text-slate-400">Standardized testing session 1 begins.</p>
</div>

<div className="relative md:w-1/2 md:pr-12 md:text-right mb-8 ml-12 md:ml-0">
<div className="absolute left-[-37px] md:right-[-5px] md:left-auto top-2 w-3 h-3 rounded-full bg-[#1a1a1a] border border-purple-500 z-10"></div>
<h4 className="text-white font-medium">Job Fair Peak Hour</h4>
<p className="text-xs text-slate-500 mb-1">12:00 PM - Hall 5</p>
<p className="text-sm text-slate-400">Walk-in interviews for shortlisted candidates.</p>
</div>

<div className="relative md:w-1/2 md:ml-auto md:pl-12 mb-8 ml-12">
<div className="absolute left-[-37px] md:left-[-5px] top-2 w-3 h-3 rounded-full bg-[#1a1a1a] border border-purple-500 z-10"></div>
<h4 className="text-white font-medium">Closing &amp; Awards</h4>
<p className="text-xs text-slate-500 mb-1">06:00 PM - Main Auditorium</p>
<p className="text-sm text-slate-400">Hackathon winners announcement.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5 bg-[#030305]">
<div className="max-w-7xl mx-auto text-center">
<p className="text-xs font-mono text-slate-500 mb-10 uppercase tracking-widest">Powered By Industry Leaders</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">

<span className="iconify text-white w-24 h-8" data-icon="simple-icons:google"></span>
<span className="iconify text-white w-24 h-8" data-icon="simple-icons:microsoft"></span>
<span className="iconify text-white w-24 h-8" data-icon="simple-icons:amazon"></span>
<span className="iconify text-white w-24 h-8" data-icon="simple-icons:vercel"></span>
<span className="iconify text-white w-24 h-8" data-icon="simple-icons:stripe"></span>
<span className="iconify text-white w-24 h-8" data-icon="simple-icons:openai"></span>
</div>
</div>
</section>

<section className="relative py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden" id="register">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 z-10">
            Ready to shape <br/> the future?
        </h2>
<p className="text-slate-400 max-w-lg mb-10 z-10">
            Spaces are limited for the Hackathon and Entry Tests. Secure your digital pass today.
        </p>
<div className="flex flex-col sm:flex-row gap-4 z-10">
<button className="px-8 py-4 bg-white hover:bg-slate-200 text-black rounded-lg font-medium text-sm transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Get Attendee Pass
            </button>
<button className="px-8 py-4 glass text-white hover:bg-white/10 rounded-lg font-medium text-sm transition-all">
                Register as Partner
            </button>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#020202] text-center md:text-left">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-slate-500" data-icon="lucide:box" data-width="16"></span>
<span className="text-slate-500 text-sm font-medium tracking-tight">TEC EXPO KARACHI</span>
</div>
<div className="flex gap-6 text-sm text-slate-600">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-slate-700">
                © 2024 TEC Global Events.
            </div>
</div>
</footer>

    </>
  );
}
